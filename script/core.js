$(function () {
	// alert(tinymce.content);
	// var data = "this is my data";
	// tinymce.get('textarea.longdesc').setContent(data);
	var tinymce = $("textarea.tinymce");
	tinymce.val("hello world!".toUpperCase());
});