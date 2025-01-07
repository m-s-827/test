$(function () {
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    // ハンバーガーメニューのクリックイベント
    $('.toggle_btn').on('click', function () {
        // headerにopenクラスが存在する場合
        if ($('header').hasClass('open')) {
            // openクラスを削除
            // openクラスを削除すると、openクラスのCSSがはずれるため、
            // メニューが非表示になる
            $('header').removeClass('open');

            // headerにopenクラスが存在しない場合
        } else {
            // openクラスを追加
            // openクラスを追加すると、openクラスのCSSが適応されるため、
            // メニューが表示される
            $('header').addClass('open');
        }
    });

    $(".mask,nav a").on("click", function () {

        $("header").removeClass("open");
      });
    });

   /*=================================================
    PC、SPのコンタクトフォームの切り替え
    ===================================================*/


  $(document).ready(function () {
    const $contactLink = $(".contact_btn");
    const $contactSection = $("#contactSection");
  
    // デバイス判定関数
    function isMobile() {
      return $(window).width() <= 768;
    }
  
    // 初期状態でスマートフォンの場合はフォームを表示
    if (isMobile()) {
      $contactSection.show(); // SPではフォームを表示
    } else {
      $contactSection.hide(); // PCではフォームを非表示
    }
  
   
    
  });


   /*=================================================
    contactbtnの移動先をPC SPで変更
    ===================================================*/
    $(document).ready(function () {
      $('.responsive-contact-link').on('click', function (e) {
        console.log('Link clicked'); // デバッグ用
        const windowWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
    
        // イベント発生時に現在のイベントリスナーを解除
        $('.responsive-contact-link').off('click');
    
        if (windowWidth < 768) {
          e.preventDefault();
          console.log('Redirecting to mobile link'); // デバッグ用
          window.location.href = 'index.html#contactSection';
        } else {
          console.log('Redirecting to PC link'); // デバッグ用
          window.location.href = 'contact.html'; // PC用リンク
        }
    
        // リダイレクト後、再度イベントをバインド
        $('.responsive-contact-link').on('click', function (e) {
          console.log('Link clicked again'); // デバッグ用
        });
      });
    });

    
   /*=================================================
   コンタクトフォームの選択
    ===================================================*/


  $(document).ready(function () {
    $('input[name="details"]').change(function () {
        if ($(this).val() === 'inquiry') {
            $('#reservation-date, #reservation-time').prop('disabled', true);
        } else {
            $('#reservation-date, #reservation-time').prop('disabled', false);
        }
    });

    // 初期状態を設定
    $('input[name="details"]:checked').trigger('change');
});

 /*=================================================
  class画像フェードイン
    ===================================================*/
$(document).ready(function () {
    // 関数：画像が画面内に入ったら表示
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
