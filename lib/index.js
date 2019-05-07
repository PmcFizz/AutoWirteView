var hasError = false // 页面验证是否通过
// 进入新的页面
function toNewPage(link) {
  location.href = link
}

$('.form-input').blur(function (even) {
  console.log(even)
  var value = $(even.target).val()
  if (value) {
    $(even.target).parents('.form-group').addClass('has-success')
  } else {
    hasError = true
    $(even.target).parents('.form-group').addClass('has-error')
  }
})

// 第一个页面点击确定
function submitFormData() {
  var driver = $("#driver").val()
  var url = $("#url").val()
  var username = $("#username").val()
  var password = $("#password").val()
  var database = $("#database").val()
  var hasError = false
  if (!hasError) {
    return
  }
}