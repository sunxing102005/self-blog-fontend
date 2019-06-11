const Base = require("./base.js");
module.exports = class extends Base {
    async listAction() {
        const condition = {
            status: 99,
            type: "post"
        };
        const page = this.get("page") || 1;
        const pageSize = this.get("pageSize") || 5;
        const list = await this.model("content")
            .where(condition)
            .page(page, pageSize)
            .fieldReverse("content,markdown")
            .order("create_time desc")
            .countSelect();
        return this.success({ content: list });
    }
    async listNoPageAction() {
        const condition = {
            status: 99,
            type: "post",
            category_id: ["IN", [1, 2]]
        };
        const defaultOrderby = "create_time desc";
        const defaultFieldReverse = "markdown";
        const recommend = this.get("recommend");
        let orderby = this.get("orderby");
        let fieldReverse = this.get("fieldReverse");
        const categoryId = this.get("category_id");
        categoryId ? (condition["category_id"] = categoryId) : "";
        !fieldReverse ? (fieldReverse = defaultFieldReverse) : "";
        recommend ? (condition["recommend"] = recommend) : "";
        orderby ? "" : (orderby = defaultOrderby);
        const list = await this.model("content")
            .where(condition)
            .fieldReverse(fieldReverse)
            .order(orderby)
            .select();
        return this.success({ content: list });
    }
    async recentAction() {
        const recent = {
            content: await think.cache("recent_content"),
            comment: await think.cache("recent_comment")
        };
        return this.success({ recent });
    }
    async recentFiveBlogsAction() {
        const recent = await this.getRecent();
        return this.success({ recent });
    }
    async detailAction() {
        const params = {
            // status: "99",
            // type: "post",
            slug: this.get("slug")
        };
        const content = await this.model("content")
            .where(params)
            .find();
        // console.log("detail1", content);
        // if (think.isEmpty(content)) {
        //     return this.redirect("/");
        // }
        this.assign("content", content);
        this.assign("title", content.title);
        const replyTo = this.get("replyTo") || 0;
        this.assign("replyTo", replyTo);
        // 增加阅读量
        this.model("content")
            .where(params)
            .increment("view");
        return this.success({ content: content });
    }
    async getBlogByIdAction() {
        const defaultFieldReverse = "markdown";
        let fieldReverse = this.get("fieldReverse");
        !fieldReverse ? (fieldReverse = defaultFieldReverse) : "";
        const params = {
            id: this.get("id")
        };
        const content = await this.model("content")
            .where(params)
            .fieldReverse(fieldReverse)
            .find();
        this.assign("content", content);
        this.assign("title", content.title);
        const replyTo = this.get("replyTo") || 0;
        this.assign("replyTo", replyTo);
        // 增加阅读量
        this.model("content")
            .where(params)
            .increment("view");
        return this.success({ content: content });
    }
    async getLastAndNextBlogAction() {
        const date = this.post("date"); // 当前博客
        const lastBlogSql = ` 
        select id,title from sx_content where abs(publish_time-str_to_date('${date}','%Y-%m-%d %T'))
         in( select min(abs(publish_time-str_to_date('${date}','%Y-%m-%d %T'))) from sx_content where status=99 
         and publish_time<'${date}' and type = 'post' and category_id in (1,2))
        `;
        const nextBlogSql = ` 
        select id,title from sx_content where abs(publish_time-str_to_date('${date}','%Y-%m-%d %T'))
        in( select min(abs(publish_time-str_to_date('${date}','%Y-%m-%d %T'))) from sx_content where status=99 
        and publish_time>'${date}' and type = 'post' and category_id in (1,2))
        `;
        const lastBlog = await this.model().query(lastBlogSql);
        const nextBlog = await this.model().query(nextBlogSql);
        this.success({ lastBlog, nextBlog });
    }
    async changeLikesAction() {
        let type = this.get("type"),
            id = this.get("id");
        if (type == "plus") {
            this.model("content")
                .where({ id })
                .increment("like");
            return this.success({ msg: "喜欢+1！" });
        } else {
            this.model("content")
                .where({ id })
                .decrement("like");
            return this.success({ msg: "取消喜欢" });
        }
    }
    async commentAction() {
        const params = {
            status: 99,
            slug: this.post("slug"),
            type: "post"
        };
        const content = await this.model("content")
            .where(params)
            .find();
        if (think.isEmpty(content)) {
            return this.redirect("/");
        }
        const data = {
            content_id: content.id,
            author: this.post("author"),
            email: this.post("email"),
            url: this.post("url"),
            agent: this.header("User-Agent"),
            text: this.post("text"),
            status: 99,
            parent_id: this.post("parent_id"),
            create_time: new Date().getTime() / 1000
        };
        const insertId = await this.model("comment").add(data);
        if (insertId) {
            this.success({ insertId });
        }
    }
};
