	var $regUser = $(".yours").find(".yours_phone");//  手机号输入框
	var phoneNum;    //   获取输入的手机号
	var phone_b = false;  //   用于判断电话号码是否正确
	$regUser.blur( function(){
		phone_b = false;
		phoneNum =$(this).val();
		var reg = /^1(3|5|7|8)[0-9]{9}$/;
		var wran = '';
		if($.cookie("username")==phoneNum){
			alert("该手机已被注册,直接去登录");
		}else{
			if ( phoneNum == '' ) {
			$(this).parent().find( ".msg_warning" ).css('display','inline-block');
			$(this).parent().find( ".msg_warning" ).html( '手机用来注册，不能为空' );
			} else if( !reg.test( phoneNum ) ){
				$(this).parent().find( ".msg_warning" ).css('display','inline-block');
				$(this).parent().find( ".msg_warning" ).html( '手机号格式错误' );
			
			}else if( reg.test( phoneNum ) ){
				phone_b = true;
				$(this).parent().find( ".msg_warning" ).css('display','none');
			}
		}
		
	});
	//验证码
	var $regAuth = $(".yours1").find('.yours_phone')
	$regAuth.blur( function(){
			var auth = $(this).val();
			var reg = /\w{4}/;
			if ( auth == '' ) {
				$(this).parent().find( ".msg_warning" ).css('display','inline-block');
				$(this).parent().find( ".msg_warning" ).html( '验证码不能为空' );
			} else if( !reg.test( auth ) ){
				$(this).parent().find( ".msg_warning" ).css('display','inline-block');
				$(this).parent().find( ".msg_warning" ).html( '验证码输入错误，请重新输入' );
			}else if( reg.test( auth ) ){
				auth_b = true;
				$(this).parent().find( ".msg_warning" ).css('display','none');
			}
	} );
	//  密码验证过程
		var $regPwd = $(".yours2").find('.yours_phone');
		var pwd;
		var pwd_b = false;
		$regPwd.blur( function(){
			pwd_b = false;
			pwd = $(this).val();
			var reg = /\w{6,}/;
			if( pwd == '' ){
				$(this).parent().find( ".msg_warning" ).css('display','inline-block');
				$(this).parent().find( ".msg_warning" ).html( '密码不能为空' );
			}else if( pwd.length<6 ){
				$(this).parent().find( ".msg_warning" ).css('display','inline-block');
				$(this).parent().find( ".msg_warning" ).html( '密码不能少于六位' );
			}else if( !reg.test( pwd ) ){
				$(this).parent().find( ".msg_warning" ).css('display','inline-block');
				$(this).parent().find( ".msg_warning" ).html( '密码中存在非法字符' );
			}else if( reg.test( pwd ) ){
				pwd_b = true;
				$(this).parent().find( ".msg_warning" ).css('display','none');
			}
				
		} );
	var pwdaff_b = false;
	var $regPwd1 = $(".yours3").find('.yours_phone');
		$regPwd1.blur( function(){
			pwdaff_b = false;
			var pwdAff = $(this).val();
			if( pwdAff != pwd ){
				$(this).parent().find( ".msg_warning" ).css('display','inline-block');
				$(this).parent().find( ".msg_warning" ).html( '两次输入的密码不同，请重新输入' );
			}else{
				pwdaff_b = true;
				$(this).parent().find( ".msg_warning" ).css('display','none');
			}
		} );
	
	$(".submit").click(function(){
			//设置用户名和密码的值,进行cookie缓存
			$.cookie("username", $(".yours").find('.yours_phone').val(),{expires: 7, path: '/' }); 
			$.cookie("password", $(".yours2").find('.yours_phone').val(),{expires: 7, path: '/' });
			alert("您已注册成功");
		}
	)
