//скрипт открытия и закрытия pop-up окна
$(document).ready(function() { 
    $('.popUp-button').click(function(event) { 
        document.onmousewheel = document.onwheel = function() {
            return false;
        };
        document.addEventListener("MozMousePixelScroll", function() { return false }, false);
        document.onkeydown = function(e) {
            if (e.keyCode >= 33 && e.keyCode <= 40) return false;
        }

        event.preventDefault(); 
        $('#overlay').fadeIn(400, 

            function() { 
                $('#modal_form')
                    .css('display', 'block') 
                    .animate({ opacity: 1, top: '50%' }, 200); 
            });
        $("#form").submit(function() {
            $.ajax({
                beforeSend: function() {
                     $("#send").css("background-color", "#63d4fb");
                    var text = $("#send").html("");
                    $('<img src="img/preloader.svg" alt="">').appendTo($("#send"));
                },
                type: "POST",
                url: "feedback-form.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                $("#send").css("background-color", "#76D386");
                $('#send').html("Отправлено");
                $('#send').prop('disabled', true);
                $("#send").css("cursor", "default");

            });
            return false;
        });
    });
    /* Зaкрытие мoдaльнoгo oкнa*/
    $('#modal_close, #overlay').click(function() { 
        document.onmousewheel = document.onwheel = function() {
            return true;
        };
        document.addEventListener("MozMousePixelScroll", function() { return true }, true);
        document.onkeydown = function(e) {
            if (e.keyCode >= 33 && e.keyCode <= 40) return true;
        }

        $('#modal_form')
            .animate({ opacity: 0, top: '45%' }, 200,
                function() { // пoсле aнимaции
                    $(this).css('display', 'none'); 
                    $('#overlay').fadeOut(400); 
                }

            );

    });
});


