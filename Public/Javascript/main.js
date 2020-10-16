(function ($) {
    // USE STRICT
    "use strict";

    $(".form-radio .radio-item").click(function(){
        //Spot switcher:
        $(this).parent().find(".radio-item").removeClass("active");
        $(this).addClass("active");
    });
  
    $('#course_type').parent().append('<ul class="list-item" id="newcourse_type" name="course_type"></ul>');
    $('#course_type option').each(function(){
        $('#newcourse_type').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#course_type').remove();
    $('#newcourse_type').attr('id', 'course_type');
    $('#course_type li').first().addClass('init');
    $("#course_type").on("click", ".init", function() {
        $(this).closest("#course_type").children('li:not(.init)').toggle('slow');
    });

    $('#confirm_type').parent().append('<ul class="list-item" id="newconfirm_type" name="confirm_type"></ul>');
    $('#confirm_type option').each(function(){
        $('#newconfirm_type').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#confirm_type').remove();
    $('#newconfirm_type').attr('id', 'confirm_type');
    $('#confirm_type li').first().addClass('init');
    $("#confirm_type").on("click", ".init", function() {
        $(this).closest("#confirm_type").children('li:not(.init)').toggle('slow');
    });
    
    //NOT REQUIRED
   /* $('#hour_appointment').parent().append('<ul class="list-item" id="newhour_appointment" name="hour_appointment"></ul>');
    $('#hour_appointment option').each(function(){
        $('#newhour_appointment').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#hour_appointment').remove();
    $('#newhour_appointment').attr('id', 'hour_appointment');
    $('#hour_appointment li').first().addClass('init');
    $("#hour_appointment").on("click", ".init", function() {
        $(this).closest("#hour_appointment").children('li:not(.init)').toggle('slow');
    });*/

    var allOptions = $("#course_type").children('li:not(.init)');
    $("#course_type").on("click", "li:not(.init)", function() {
        allOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#course_type").children('.init').html($(this).html());
        allOptions.toggle('slow');
    });

    //NOT REQUIRED
    /*var FoodOptions = $("#confirm_type").children('li:not(.init)');
    $("#confirm_type").on("click", "li:not(.init)", function() {
        FoodOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#confirm_type").children('.init').html($(this).html());
        FoodOptions.toggle('slow');
    });

    var AppointmentOptions = $("#hour_appointment").children('li:not(.init)');
    $("#hour_appointment").on("click", "li:not(.init)", function() {
        AppointmentOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#hour_appointment").children('.init').html($(this).html());
        AppointmentOptions.toggle('slow');
    });*/

    jQuery.validator.addMethod('iiitkota', function (value, element) {
        return this.optional(element) || /^[a-z0-9](\.?[a-z0-9]){5,}@iiitkota\.ac\.in$/i.test(value);
    }, "Use your institute assigned email address.");
    $('#student-form').validate({
        // Specify validation rules
        rules: {
          // The key name on the left side is the name attribute
          // of an input field. Validation rules are defined
          // on the right side
          title: "required",
          name: "required",
          phone_number: "required",
          email: {
            required: true,
            // Specify that email should be validated
            // by the built-in "email" rule
            email: true,
            iiitkota: true
          },
          password: {
            required: true,
            minlength: 8
          },
          confirm_pwd: {
            required: true,
            minlength: 8,
            equalTo: "#password"
          }
        },
        // Specify validation error messages
        messages: {
          title: "Please enter your Institute ID",
          name: "Please enter your name",
          password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 8 characters long"
          },
          confirm_pwd: {
            required: "Please confirm your password",
            minlength: "Your password must be at least 8 characters long",
            equalTo: "Confirm password and password do not match"
          },
          email:{ 
            email: "Please enter a valid email address",
            iiitkota:"theee"
          }
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
          form.submit();
        }
      });

      $('#submit').click(function(){
          var emailAddress = $('#email').val();
          var InstituteID = $('#title').val();
          var idealEmail = [kucpe0-9]+@
      });
})(jQuery);