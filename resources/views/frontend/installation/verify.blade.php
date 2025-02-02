@extends("frontend.installation.head")
@section('title','Emart | Installation')
@section("content")   
<div class="preL display-none">
        <div class="preloader3 display-none"></div>
</div>
@if ($errors->any())
<div class="alert alert-danger">
  <ul>
    @foreach ($errors->all() as $error)
    <li>{{ $error }}</li>
    @endforeach
  </ul>
</div>
@endif
<div class="container">
        <div class="card">
          <div class="card-header">
              <h3 class="m-3 text-center text-dark ">
                  Enter Your Purchase code Detail
              </h3>
          </div>
          <div class="card-body" id="stepbox">
            <div class="text-center">
              <span class="text-danger">{{Session::get('vrfy_error');}}</span>
            </div>
               <form action="{{url('verifycode')}}" id="stepvform" method="POST" class="needs-validation" novalidate>                  
                  {{ csrf_field() }}
                   <h3>Envato Purchase details</h3>
                   <hr>
                  <div class="row">
                   
                    <br>
                    <div class="col-md-6 mb-3">
                      <label for="validationCustom01">Envato User Name:</label>
                      <input name="user_id" type="text" class="form-control" id="validationCustom01" placeholder="Username" value="" required>
                      <div class="valid-feedback">
                        Looks good!
                      </div>
                      <div class="invalid-feedback">
                          Please fill name.
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label for="validationCustom01">Your site Domain:</label>
                      <input name="domain" type="text" class="form-control" id="validationCustom01" placeholder="Domain" value="" required>
                      <div class="valid-feedback">
                        Looks good!
                      </div>
                      <div class="invalid-feedback">
                          Please fill Domain.
                      </div>
                    </div>
                    <div class="eyeCy col-md-6 mb-3">
                      <label for="validationCustom02">Envato Purchase Code:</label>
                      <input name="code" type="password" class="form-control" id="validationCustom02" placeholder="Please enter valid purchase code" value="" autocomplete="off" required>
                       <span toggle="#validationCustom02" class="eye fa fa-fw fa-eye field-icon toggle-password"></span>
                      <div class="valid-feedback">
                        Looks good!
                      </div>
                      <div class="invalid-feedback">
                      </div>                          
                        @if($errors->any())
                          <h6 class="text-danger alert alert-error">{{$errors->first()}}</h6>
                        @endif

                        <br>
                        <a href="https://help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code" target="_blank">Where Is My Purchase Code ??</a>
                    </div>  
                    <div class="col-md-6 mb-3">
                      <div class="custom-control custom-checkbox p-4">
                        <input  type="checkbox" class="custom-control-input coupon_question" id="customCheck2" name="eula2" checked="checked" required onchange="valueChanged()"/>
                        <label class="custom-control-label" for="customCheck2"><b>I agree <a href ="http://mediacity.co.in/privacy-policy">Privacy Policy</a></b></label>
                      </div>
                    </div>                  
                  </div>
                  <div class="col-md-12">
                  <p class="text-dark font-weight-bold">Please read this agreement carefully before installing or using this product.</p>
                  <p class="text-dark font-weight-normal">If you agree to all of the terms of this End-User License Agreement, by checking the box or clicking the button to confirm your acceptance when you first install the web application, you are agreeing to all the terms of this agreement. Also, By downloading, installing, using, or copying this web application, you accept and agree to be bound by the terms of this End-User License Agreement, you are agreeing to all the terms of this agreement. If you do not agree to all of these terms, do not check the box or click the button and/or do not use, copy or install the web application, and uninstall the web application from all your server that you own or control.</p>
                  
                  <b>Note:</b> 
                  <span class="text-dark font-weight-normal">
                    With Emart - Learning Management System, We are using the official Payment API (Paypal, Instamojo, Stripe, Razorpay, Paystack, Paytm, Skrill, Molli, Flutterwave, Cash Free, PayU, Omise) which is available on Developer Center. That is a reason why our product depends on Payment API(Paypal, Instamojo, Stripe, Razorpay, Paystack, Paytm, Skrill, Molli, Flutterwave, Cash Free, PayU, Omise, Skrill, Molli, Flutterwave, Cash Free, PayU, Omise). Therefore, We are not responsible if they made too many critical changes in their side. We also don't guarantee that the compatibility of the script with Payment API will be forever. Although we always try to update the lastest version of script as soon as possible. We don't provide any refund for all problems which are originated from Payments API (Paypal, Instamojo, Stripe, Razorpay, Paystack, Paytm, Skrill, Molli, Flutterwave, Cash Free, PayU, Omise ).
                  </span> 
                  <br><br>
                  <div> 
                    <p class="mb-4"><b>Purchase Data</b> To receive product support, you have to have one or more Envato purchase codes on our website. These purchase codes will be stored together with support expiration dates and your user data. This is required for us to provide you with downloads, product support and other customer services.</p>
                  </div>
                  <div class="verify-content-list mb-4"> 
                    <p><b>Cases for Using the Personal Data</b></p>
                    <p><b>We use your personal information in the following cases:</b></p>
                    <ul>
                      <li>Verification/identification of the user during website usage;</li>
                      <li>Providing Technical Assistance;</li>
                      <li>Sending updates to our users with important information to inform about news/changes;</li>
                      <li>Checking the accounts’ activity in order to prevent fraudulent transactions and ensure the security</li>
                      <li>over our customers’ personal information;</li>
                      <li>Customize the website to make your experience more personal and engaging;</li>
                      <li>Guarantee overall performance and administrative functions run smoothly.</li>
                    </ul>
                  </div>
                  <div class="mb-4">
                    <h5 class="varified-content-title">Embedded Content</h5>
                    <p>Pages on this site may include embedded content, like YouTube videos, for example. Embedded content from other websites behaves in the exact same way as if you visited the other website.</p>
                    <p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged-in to that website. Below you can find a list of the services we use:</p>
                  </div>
                  <div class="mb-4">
                    <h5 class="varified-content-title">YouTube</h5>
                    <p>We use YouTube videos embedded on our site. YouTube has its own cookie and privacy policies over which we have no control. There is no installation of cookies from YouTube and your IP is not sent to a YouTube server until you consent to it. See their privacy policy here: <a href="" title="Youtube Privacy Policy">YouTube Privacy Policy.</a></p>
                  </div>
                  <div class="mb-4">
                    <h5 class="varified-content-title">Consent Choice</h5>
                    <p>We provide you with the choice to accept this or not, we prompt consent boxes for all embedded content, and no data is transferred before you consented to it. The checkboxes below show you all embeds you have consented to so far. You can opt-out any time by un-checking them and clicking the update button.</p>
                  </div>
                  <div class="mb-4">
                    <h5 class="varified-content-title">How Long We Retain Your Data</h5>
                    <p>When you submit a support ticket or a comment, its metadata is retained until (if) you tell us to remove it. We use this data so that we can recognize you and approve your comments automatically instead of holding them for moderation.</p>
                  </div>
                  <div class="mb-4">
                    <h5 class="varified-content-title">Security Measures</h5>
                    <p>We use the SSL/HTTPS protocol throughout our site. This encrypts our user communications with the servers so that personal identifiable information is not captured/hijacked by third parties without authorization.</p>
                    <p>In case of a data breach, system administrators will immediately take all needed steps to ensure system integrity, will contact affected users and will attempt to reset passwords if needed.</p>
                  </div>
                  <div class="mb-4">
                    <h5 class="varified-content-title">Amendments</h5>
                    <p>We may amend this Privacy Policy from time to time. When we amend this Privacy Policy, we will update this page accordingly and require you to accept the amendments in order to be permitted to continue using our services.</p>
                  </div>
                  <hr>
                  <div class="custom-control custom-checkbox">
                    <input  type="checkbox" class="custom-control-input coupon_question1" id="customCheck1" name="eula" checked="checked" onchange="valueChanged()" required/>
                    <label class="custom-control-label" for="customCheck1"><b>I read the terms and condition carefully and I agree on it.</b></label>
                  </div>
                </div>
                <button class="float-right step1btn btn btn-primary answer" type="submit">Please Verify</button>
              </form>
          </div>
        </div>
        <p class="text-center m-3 text-white">&copy;{{ date('Y') }} | Emart | Installer v1.1 | <a class="text-white" href="http://mediacity.co.in">Media City</a></p>
      </div>
@endsection

@section("script")  
<script type="text/javascript">
        function valueChanged()
        {
          // $(".answer").hide();
          var x = $('.coupon_question').is(":checked");
          var x2 = $('.coupon_question1').is(":checked");
          
            if(x == true && x2 == true)   
            $(':submit').prop('disabled', false);
                // $(".answer").show();
            else
            $(':submit').prop('disabled', true);
                // $(".answer").hide();
        }
    </script>
@endsection