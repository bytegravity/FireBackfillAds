以下代码可根据访客用户的浏览器设置，针对中文访客展示万维广告，针对非中文访客展示其他第三方国外广告网络的广告

1. 首先需要在页面欲放置广告的适当位置放置一个 placeholder 占位 div：
```
<div class="placeholderads"></div> 
```

2. 然后在页面底部引入 jquery
```
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
```

3. 最后在页面底部放置以下 script 代码，并修改代码中的 data-id 为你的广告单元ID
```
<script>
    $(function () {
        //获取用户浏览器设置的语言，优先获取本地缓存的内容，如果没有获取到则默认为中文
        var broLang = localStorage.getItem("locale") || window.navigator.language.toLowerCase() || "zh-cn";

        //此处需改 data-id 为你的广告单元ID
        let wwadsDiv = '<div class="wwads-cn wwads-horizontal" data-id="此处改为你的广告单元ID" style="max-width: 450px"></div>';

        //把用户的语言写入缓存，供下次获取使用
        localStorage.setItem("locale", broLang);

        //判断用户的语言，跳转到不同的地方
        if (broLang.startsWith("zh")) {
            //针对中文访客展示万维广告
            $(".placeholderads").replaceWith(wwadsDiv);
            var _sr = document.createElement('script');
            _sr.type = 'text/javascript';
            _sr.async = true;
            _sr.src = 'https://cdn.wwads.cn/js/makemoney.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(_sr);
        } else {
            $(".ads").replaceWith(
                '此处输入国外广告联盟的代码'
            );
        }
    });
</script>
```
