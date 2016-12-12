$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/TeoDaTank.json',
    dataType: 'jsonp',
    success: function(response) {
      $.each(response.courses.completed, function(k,v){
       console.log(k,v)
       $('#badges').append('<div class="course"><h3>'+v.title+'</h3><img src="'+v.badge+'"><a href="'+v.url+'" class="btn btn-primary" target=_blank>See Course</a></div>')
      })
    }
  });

});
