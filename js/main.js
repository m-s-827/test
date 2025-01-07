$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  // ハンバーガーメニューのクリックイベント
  $('.toggle_btn').on('click', function () {
      // headerにopenクラスが存在する場合
      $('header').toggleClass('open');
  });

  $(".mask,nav a").on("click", function () {
      $("header").removeClass("open");
  });

  /*=================================================
  PC、SPのコンタクトフォームの切り替え
  ===================================================*/
  const $contactSection = $("#contactSection");

  // デバイス判定関数
  function isMobile() {
      return $(window).width() <= 768;
  }

  // 初期状態でフォームを表示/非表示
  function toggleContactForm() {
      if (isMobile()) {
          $contactSection.show();
      } else {
          $contactSection.hide();
      }
  }

  // 初期状態とリサイズ時にフォームの表示/非表示を制御
  toggleContactForm();
  $(window).on('resize', toggleContactForm);

  /*=================================================
  contactbtnの移動先をPC SPで変更
  ===================================================*/
  function getRedirectUrl() {
      return isMobile() ? 'index.html#contactSection' : 'contact.html';
  }

  // 初回にリダイレクトURLを設定
  let redirectUrl = getRedirectUrl();

  $('.responsive-contact-link').on('click', function (e) {
      console.log('Link clicked');
      e.preventDefault(); // デフォルトのリンク動作を防ぐ
      console.log('Redirecting to: ' + redirectUrl);
      window.location.href = redirectUrl;
  });

  // リサイズ時にリダイレクトURLを再設定
  $(window).on('resize', function () {
      redirectUrl = getRedirectUrl();
      console.log('Window resized, new redirect URL: ' + redirectUrl);
  });

  /*=================================================
  コンタクトフォームの選択
  ===================================================*/
  $('input[name="details"]').change(function () {
      if ($(this).val() === 'inquiry') {
          $('#reservation-date, #reservation-time').prop('disabled', true);
      } else {
          $('#reservation-date, #reservation-time').prop('disabled', false);
      }
  });

  // 初期状態を設定
  $('input[name="details"]:checked').trigger('change');

  /*=================================================
  class画像フェードイン
  ===================================================*/
  function fadeInOnScroll() {
      $('.class_list img,.instructor_img,.about_text_top').each(function () {
          // 画像の位置を取得
          var elementOffset = $(this).offset().top;
          var scrollTop = $(window).scrollTop();
          var windowHeight = $(window).height();

          // 画像が画面の20%に来たかを判定
          if (scrollTop + windowHeight * 0.8 > elementOffset) {
              $(this).css('opacity', 1); // フェードイン
          }
      });
  }

  // スクロールイベントに関数をバインド
  $(window).on('scroll', fadeInOnScroll);

  // 初期ロード時にもチェック
  fadeInOnScroll();
});
