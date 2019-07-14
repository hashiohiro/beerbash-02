$('#daikichi').hide();
$('#daikyou').hide();
$('#btnStart').click(function () {
    $.ajax({
        url: 'http://localhost:3000/api/v1/omikuji',
        type: 'get',
        success: function (data) {
            if (data.result === '大吉') {
                $('#daikichi').show();
                $('#daikyou').hide();
            }
            else {
                $('#daikichi').hide();
                $('#daikyou').show();
            }
        }
    });
});
//# sourceMappingURL=FrontendApp.js.map