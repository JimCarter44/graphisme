$(document).ready(function () {
  console.log("test");
  let fullScreenImg = $(".fullScreenImg");
  let doneCountryFull = $("#donCountryFull");
  let weazelFull = $("#weazelFull");
  $(".fa-xmark").click(function () {
    fullScreenImg.fadeOut(500);
    weazelFull.fadeOut(500);
    doneCountryFull.fadeOut(500);
  });
  $("#weazelLink").click(function () {
    console.log("click");
    fullScreenImg.fadeIn(500);
    weazelFull.fadeIn(500);
    fullScreenImg.css("display", "flex");
    weazelFull.css("display", "flex");
  });
  $("#donCountryLink").click(function () {
    console.log("click");
    fullScreenImg.fadeIn(500);
    doneCountryFull.fadeIn(500);
    fullScreenImg.css("display", "flex");
    doneCountryFull.css("display", "flex");
  });
})
