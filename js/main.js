
//문화예술공간 회전 효과 주기

window.onscroll = function(){
    scrollE();
}
function scrollE(){
    var cont = document.querySelector('#container');
    var cli = cont.getBoundingClientRect().top; //container의 위치 값을 찾기
    // var img = document.getElementById('test1');
    // var img2 = document.getElementById('test2');
    // var img3 = document.getElementById('test3');
    // var img4 = document.getElementById('test4');
    // var img5 = document.getElementById('test5');
    // var img6 = document.getElementById('test6');
    console.log(cli);
    //alert(cli);
        // if(cli < 600){
        //     img.classList.add('show'),
        //     img2.classList.add('show'),
        //     img3.classList.add('show'),
        //     img4.classList.add('show'),
        //     img5.classList.add('show'),
        //     img6.classList.add('show');
        // } else{
            // img.classList.remove('show');
            // img2.classList.remove('show');
            // img3.classList.remove('show');
            // img4.classList.remove('show');
            // img5.classList.remove('show');
            // img6.classList.remove('show');

        if(cli < 600){
        const myNodelist = document.querySelectorAll(".interval_img");
        for (let i = 0; i < myNodelist.length; i++) {
        setTimeout(function(){
          myNodelist[i].classList.add('interval_show');
          },300*i)
        }
    }
}

//탭 버튼 클릭시
$(document).ready(function(){

    // $(".main_btn_wrap").addClass("active_underline")
    // $(".main_btn").addClass("active_underline_a")

    $(".main_btn").click(function(){
        $(".main_btn_wrap").addClass("active_underline")
        $(".main_btn").addClass("active_underline_a")
        $(".main_btn2_wrap").removeClass("active_underline")
        $(".main_btn2").removeClass("active_underline_a")
        $(".main_btn3_wrap").removeClass("active_underline")
        $(".main_btn3").removeClass("active_underline_a")
        $('.view1').addClass('show')
        $('.view1').removeClass('noshow')
        $('.view2').addClass('noshow')
        $('.view2').removeClass('show')
        $('.view3').addClass('noshow')
        $('.view3').removeClass('show')
    })

    $(".main_btn2").click(function(){
        $(".main_btn_wrap").removeClass("active_underline")
        $(".main_btn").removeClass("active_underline_a")
        $(".main_btn2_wrap").addClass("active_underline")
        $(".main_btn2").addClass("active_underline_a")
        $(".main_btn3_wrap").removeClass("active_underline")
        $(".main_btn3").removeClass("active_underline_a")
        $('.view1').addClass('noshow')
        $('.view1').removeClass('show')
        $('.view2').addClass('show')
        $('.view2').removeClass('noshow')
        $('.view3').addClass('noshow')
        $('.view3').removeClass('show')
    })

    $(".main_btn3").click(function(){
        $(".main_btn_wrap").removeClass("active_underline")
        $(".main_btn2").removeClass("active_underline_a")
        $(".main_btn2_wrap").removeClass("active_underline")
        $(".main_btn2").removeClass("active_underline_a")
        $(".main_btn3_wrap").addClass("active_underline")
        $(".main_btn3").addClass("active_underline_a")
        $('.view1').addClass('noshow')
        $('.view1').removeClass('show')
        $('.view2').addClass('noshow')
        $('.view2').removeClass('show')
        $('.view3').addClass('show')
        $('.view3').removeClass('noshow')
    })
})

//문화예술정보 탭 이벤트

$('#sb_tab1').click(function(){
    $('#sb_tab1').addClass('culture_active_sb')
    $('.active_sb').addClass('active_sb')
    $('#sb_tab2').removeClass('culture_active_sb')
    $('#sb_tab3').removeClass('culture_active_sb')
    $('#sb_tab4').removeClass('culture_active_sb')
    $('#sb_tab5').removeClass('culture_active_sb')
    $('#sb_tab6').removeClass('culture_active_sb')

    $('.daejun_performance').removeClass('sb_list_opacity')
    $('.daejun_event').removeClass('sb_list_opacity')
    $('.daejun_exhibition').removeClass('sb_list_opacity')
    $('.daejun_education').removeClass('sb_list_opacity')
})


$('#sb_tab2').click(function(){
    $('.active_sb').removeClass('active_sb')
    $('#sb_tab1').removeClass('culture_active_sb')
    $('#sb_tab2').addClass('culture_active_sb')
    $('#sb_tab3').removeClass('culture_active_sb')
    $('#sb_tab4').removeClass('culture_active_sb')
    $('#sb_tab5').removeClass('culture_active_sb')
    $('#sb_tab6').removeClass('culture_active_sb')

    $('.daejun_performance').removeClass('sb_list_opacity')
    $('.daejun_event').addClass('sb_list_opacity')
    $('.daejun_exhibition').addClass('sb_list_opacity')
    $('.daejun_education').addClass('sb_list_opacity')
})

$('#sb_tab3').click(function(){
    $('.active_sb').removeClass('active_sb')
    $('#sb_tab1').removeClass('culture_active_sb')
    $('#sb_tab2').removeClass('culture_active_sb')
    $('#sb_tab3').addClass('culture_active_sb')
    $('#sb_tab4').removeClass('culture_active_sb')
    $('#sb_tab5').removeClass('culture_active_sb')
    $('#sb_tab6').removeClass('culture_active_sb')


    $('.daejun_event').addClass('sb_list_opacity')
    $('.daejun_exhibition').removeClass('sb_list_opacity')
    $('.daejun_education').addClass('sb_list_opacity')
    $('.daejun_performance').addClass('sb_list_opacity')
})


$('#sb_tab4').click(function(){
    $('.active_sb').removeClass('active_sb')
    $('#sb_tab1').removeClass('culture_active_sb')
    $('#sb_tab2').removeClass('culture_active_sb')
    $('#sb_tab3').removeClass('culture_active_sb')
    $('#sb_tab4').addClass('culture_active_sb')
    $('#sb_tab5').removeClass('culture_active_sb')
    $('#sb_tab6').removeClass('culture_active_sb')


    $('.daejun_event').removeClass('sb_list_opacity')
    $('.daejun_exhibition').addClass('sb_list_opacity')
    $('.daejun_education').addClass('sb_list_opacity')
    $('.daejun_performance').addClass('sb_list_opacity')
})

$('#sb_tab5').click(function(){
    $('.active_sb').removeClass('active_sb')
    $('#sb_tab1').removeClass('culture_active_sb')
    $('#sb_tab2').removeClass('culture_active_sb')
    $('#sb_tab3').removeClass('culture_active_sb')
    $('#sb_tab4').removeClass('culture_active_sb')
    $('#sb_tab5').addClass('culture_active_sb')
    $('#sb_tab6').removeClass('culture_active_sb')


    $('.daejun_event').addClass('sb_list_opacity')
    $('.daejun_exhibition').addClass('sb_list_opacity')
    $('.daejun_education').removeClass('sb_list_opacity')
    $('.daejun_performance').addClass('sb_list_opacity')
})


$('#sb_tab6').click(function(){
    $('.active_sb').removeClass('active_sb')
    $('#sb_tab1').removeClass('culture_active_sb')
    $('#sb_tab2').removeClass('culture_active_sb')
    $('#sb_tab3').removeClass('culture_active_sb')
    $('#sb_tab4').removeClass('culture_active_sb')
    $('#sb_tab5').removeClass('culture_active_sb')
    $('#sb_tab6').addClass('culture_active_sb')


    $('.daejun_event').addClass('sb_list_opacity')
    $('.daejun_exhibition').addClass('sb_list_opacity')
    $('.daejun_education').addClass('sb_list_opacity')
    $('.daejun_performance').addClass('sb_list_opacity')
})

// pagenation 이벤트

$('#dot1').click(function(){
    $('#dot1').addClass('active_dot')
    $('.postinner').css({'transform': 'translate3d(0px,0px,0px)'})
    $('#dot2').removeClass('active_dot')
    $('#dot3').removeClass('active_dot')
    $('#dot4').removeClass('active_dot')
})

$('#dot2').click(function(){
    $('#dot2').addClass('active_dot')
    $('.postinner').css({'transform' : 'translate3d(-900px,0px,0px)'})
    $('#dot1').removeClass('active_dot')
    $('#dot3').removeClass('active_dot')
    $('#dot4').removeClass('active_dot')
})

$('#dot3').click(function(){
    $('#dot3').addClass('active_dot')
    $('.postinner').css({'transform' : 'translate3d(-1820px,0px,0px)'})
    $('#dot1').removeClass('active_dot')
    $('#dot2').removeClass('active_dot')
    $('#dot4').removeClass('active_dot')
})

$('#dot4').click(function(){
    $('#dot4').addClass('active_dot')
    $('.postinner').css({'transform' : 'translate3d(-2750px,0px,0px)'})
    $('#dot1').removeClass('active_dot')
    $('#dot2').removeClass('active_dot')
    $('#dot3').removeClass('active_dot')
})
