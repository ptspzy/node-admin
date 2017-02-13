require('./sb-admin-2.js');

require( 'datatables.net' );
require( 'datatables.net-bs' );

// require('../bower_components/datatables.net/js/jquery.dataTables.js');
require('../bower_components/datatables.net-bs/css/dataTables.bootstrap.css');
// require('../bower_components/datatables.net-bs/js/dataTables.bootstrap.js');


// require('eonasdan-bootstrap-datetimepicker');
// require('../bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css');

require('bootstrap-datepicker');
require('bootstrap-select');
require('../bower_components/bootstrap-select/dist/css/bootstrap-select.css');
require('../bower_components/bootstrap-datepicker/dist/locales/bootstrap-datepicker.zh-CN.min');

$(document).ready(function() {

    $('#dataTables-example').DataTable({
        responsive: true,
        "paging":   true,
        "ordering": false,
        "info":     true,
        "searching": false,
        "language": {
            "url": "http://cdn.datatables.net/plug-ins/1.10.13/i18n/Chinese.json"
        }
    });

    $('#datetimepicker10').datepicker({
        language: 'zh-CN',
        autoclose: true,
        todayHighlight: true,
        format: 'yyyy-mm-dd'
    });

    $('.selectpicker').selectpicker({
        size: 4
    });

});