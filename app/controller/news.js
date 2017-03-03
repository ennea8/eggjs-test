module.exports = app => {
  class NewsController extends app.Controller {
    * list() {
      const dataList = {
        list: [
          { id: 1, title: 'this is news 1', url: '/news/1' },
          { id: 2, title: 'this is news 2', url: '/news/2' }
        ]
      };

      console.log('before render', dataList)

      yield this.ctx.render('news/list.tpl', dataList,{viewEngine:'nunjucks'});
    }
  }
  return NewsController;
};
