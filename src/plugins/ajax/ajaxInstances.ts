import AjaxCreator from './ajaxCreator'

export const serviceAjax = (
  new AjaxCreator({
    baseUrl: 'http://app.dev.eline56-inc.com/services',
    headers: {
      token: 'pn_4558a6edd43646fd92bb9f4fa1a6f54d'
    }
  }) as any
).getAjax()
