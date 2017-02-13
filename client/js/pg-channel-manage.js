require('./sb-admin-2.js');

require( 'datatables.net');
require( 'datatables.net-bs');

require('../bower_components/datatables.net-bs/css/dataTables.bootstrap.css');

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

});