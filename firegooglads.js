// 用于万维广告流量主添加 Google Adsense 作为 backfill ads 的代码，欢迎改进/提 PR
// 用法详见：https://wwads.cn/help/publishers/backfill-google-ads
// 请将以下代码放到欲加载 backfill ads 页面的底部

<script>
  //fire the loadGoogleAds function when the page is fully loaded
  docReady(function () {
    loadGoogleAds();
  });

  //fire the loadGoogleAds function for SPA
  window.onpopstate = history.onpushstate = function (event) {
    setTimeout(function () {
      loadGoogleAds();
    }, 1000);
  };

  //load google ads and send ad request
  function loadGoogleAds() {
    var google_sr = document.createElement("script");
    google_sr.type = "text/javascript";
    google_sr.async = true;
    google_sr.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(google_sr);

    //try to find the backfillads and fire the ad request
    var backfillads = document
      .getElementsByClassName("wwads-cn")[0]
      .getElementsByTagName("ins");
    var i = 0;
    var try2loadads = setInterval(function () {
      if (i > 3) {
        clearInterval(try2loadads);
        return;
      }
      if (backfillads.length > 0) {
        clearInterval(try2loadads);
        try {
          (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          i++;
        }
      } else {
        i++;
      }
    }, 1000);
  }
</script>
