谷歌广告的填充率不是 100% 的，这意味着您的用户可能有时候看不到广告，当谷歌广告系统未填充广告时，其广告填充与否参数即 `data-ad-status` 的值为 `unfilled`，您可以利用此功能在谷歌广告未填充时使用万维广告填充。

参考代码如下：

```
<html>
<head></head>
<body>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-你的谷歌广告发布商ID" crossorigin="anonymous"></script>
  <!-- 谷歌横幅广告 -->
  <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-你的谷歌广告发布商ID" data-ad-slot="广告单元ID" data-ad-format="auto" data-full-width-responsive="true"></ins>
  <script>
    (adsbygoogle = window.adsbygoogle || []).push({});
    
    var interval = setInterval(function () {
      if (document.querySelector('.adsbygoogle').getAttribute('data-ad-status') === 'unfilled') {
        clearInterval(interval);
        const wwadsDiv = '<div class="wwads-cn wwads-vertical" data-id="你的万维广告单元 ID" style="max-width:300px;margin-top:0"></div>';
        document.querySelector('.adsbygoogle').outerHTML = wwadsDiv;
        const wwadsJs = document.createElement('script');
        wwadsJs.type = 'text/javascript';
        wwadsJs.async = true;
        wwadsJs.charset = 'UTF-8';
        wwadsJs.src = 'https://cdn.wwads.cn/js/makemoney.js';
        document.getElementsByTagName('head')[0].appendChild(wwadsJs);
      } else if (document.querySelector('.adsbygoogle').getAttribute('data-ad-status') === 'filled') {
        clearInterval(interval);
      } 
    }, 100);
  </script>
</body>
</html>
```
