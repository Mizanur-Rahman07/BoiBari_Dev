<!DOCTYPE html>
@php
    $selected_language = App\Language::firstWhere('lang_code','=',session()->get('changed_language'));
@endphp
<html lang="{{ str_replace('_', '-', session()->get('changed_language')) }}" @if(isset($selected_language) && $selected_language->rtl_available == 1) dir="rtl" @endif>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="author" content="{{ config('app.name') }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <title>@yield('title') {{ __('Admin Dashboard') }}</title>
    @include('admin.layouts.head')
</head>
<body class="vertical-layout"> 
<div id="containerbar">

@include('admin.layouts.mainsidebar')
   

<div class="rightbar">
   
     <!-- Start Contentbar -->    
                  
        @yield('body')
    

         <!-- Start Footerbar -->
    <div class="footerbar">
        <footer class="footer">
            <p class="mb-0">
                {{ config('app.name') }} {{ $Copyright }}</strong>
                <span class="pull-right"><b>{{ __("v") }} {{ config('app.version') }} {{ get_release() }}</b>
            </p>
        </footer>
    </div>
       
  
  
    
    <!-- End Footerbar -->
</div>

</div>
@include('admin.layouts.scripts')
<!-- End js -->
@yield('custom-script')
@stack('script')
</body>
</html>