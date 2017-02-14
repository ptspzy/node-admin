require('./sb-admin-2.js');

require('bootstrap-datepicker');
require('../bower_components/bootstrap-datepicker/dist/locales/bootstrap-datepicker.zh-CN.min');

$(document).ready(function () {

    $('.datetimepicker10').datepicker({
        language: 'zh-CN',
        autoclose: true,
        todayHighlight: true,
        format: 'yyyy-mm-dd'
    });
});