import { serviceAjax } from '../plugins/ajax/ajaxInstances'

export const testApi = () => serviceAjax('/company/currentCompany')
