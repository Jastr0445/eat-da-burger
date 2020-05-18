$(function() {
    $(".change-burger").on("click", function(event) {
      var id = $(this).data("id");
      var newburger = $(this).data("newburger");
  
      var newBurger = {
        burger: newBurgers
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurger
      }).then(
        function() {
          console.log("changed devored to", newBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        burger: $("[name=burger]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("order new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/order/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("devored burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  