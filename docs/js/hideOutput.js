$(document).ready(function() {
  $chunks = $('.folded, .unfolded');
  var thisClass;
  $chunks.each(function () {
    $(this).find('img').unwrap('<p>');
    $(this).find('img').wrap('<pre class=\"plot\"></pre>');
    
    thisClass = $(this).attr('class');
    var word;
    if(thisClass === 'unfolded') {
      word = 'Hide';
    } else {
      word = 'Show';
      $('pre', this).find('code, img').toggle();
    }
    
    $('pre.r', this).append('<span class=\"showopt\">' + word + ' Source</span>');
    $('pre:not(.r)', this).has('code').append('<span class=\"showopt\">' + word + ' Output</span>');
    $('pre.plot', this).append('<span class=\"showopt\">' + word + ' Plot</span>');
  });

  $(".showopt").click(function() {
    var label = $(this).html();
    if(label.indexOf('Show') >= 0) {
      $(this).html(label.replace('Show', 'Hide'));
    } else {
      $(this).html(label.replace('Hide', 'Show'));
    }
      $(this).parent().find('code, img').slideToggle('fast', 'swing');
  });
  
  
  // Copy Button
  $chunks = $('pre.sourceCode > code.sourceCode');
  $chunks.each(function(i, val) {
    $(this).prepend("<button class=\"button copy\"><i class=\"fa fa-copy fa-2x\"></i></button>").click(function() {
      var $temp = $("<textarea>");
      $("body").append($temp);
      var content = $(this).clone().children("button").remove().end().text();
      $temp.val(content).select();
      document.execCommand("copy");
      $temp.remove();
    });
  });
  
  
});





