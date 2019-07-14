$('#daikichi').hide();
$('#daikyou').hide();
$('#btnStart').click(function () {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/v1/omikuji',
        success: function (data) {
            alert(data);
        }
    });
});
//# sourceMappingURL=app.js.map