(function($){
  
  $("select.multitier").each(function() {
    $(this).parent().prepend("<input type='hidden' name='" + $(this).attr("name") + "' value='" + $(this).val() + "' />");
    $(this).attr("name", "nothing").hide().trigger("change");
  });
  
  $("select.multitier").live("change", function() {
    $(this).prevAll("input").val($(this).val());
    $(this).nextAll("select").remove();
    visible_selects = $(this).parent().find("select:not(:hidden)");
    to_replace = visible_selects.find("option:selected").map(function() {
      return $(this).html();
    }).get().join(" > ").replace(/&amp;/g, "&").replace("(none)", "");
    children = $(this).parent().find("select").eq(0).find("option:contains('" + to_replace + "')");
    if (children.length > 1 && (($(this).find("option:selected").html().length > 0 && $(this).val().length > 0) || visible_selects.length == 0)) {
      new_select = $(this).parent().append("<select></select>").end().next();
      children.each(function() {
        new_value = $(this).html().replace(to_replace.replace(/&/g, "&amp;").replace(/>/g, "&gt;"), "").replace(/^ &gt; /, "");
        if (new_value.indexOf("&gt;") == -1) {
          new_select.append("<option value='" + $(this).attr("value") + "'>" + new_value + "</option>");
        }
      });
    }
  });

})(jQuery);