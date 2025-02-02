@extends('admin.layouts.master-soyuz')
@section('title',__('Edit Invoice Setting'))
@section('body')

<?php
  $data['heading'] = 'Invoice Setting';
  $data['title0'] = 'Order & Invoices';
  $data['title1'] = 'Invoice Setting';
?>
@include('admin.layouts.topbar',$data)

<div class="contentbar bardashboard-card">
  <div class="row">
    @if ($errors->any())
    <div class="alert alert-danger" role="alert">
      @foreach($errors->all() as $error)
      <p>{{ $error}}<button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span></button></p>
      @endforeach
    </div>
    @endif
    <div class="col-lg-12">
      <div class="card m-b-30">
        <div class="card-header">
          
          <div class="row">
            <div class="col-lg-10">
              <h5 class="box-title">{{ __('Edit') }} {{ __('Invoice Setting') }}</h5>
            </div>
            <div class="col-md-2">
              <div class="widgetbar">
                <div class="wrapper-tooltip">
                  <button type="button" class="btn btn-primary-rgba"><i class="fa fa-info-circle float-right"></i></button>
                  <div class="tooltip">
                    <ul>
                      <li>
                        {{__('Invoice No. is That Like From Where you want to Start Your Invoice No.')}}
                      </li>
                      <li>{{__('If your')}} <b>{{__('Prefix')}}:</b> {{__("ABC")}}, <b>{{__("Postfix")}}:</b> {{__('XYZ or')}} <b>Invoice No. Start From
                          :</b> 001</li>
                      <li>{{__("Than your first Invoice no. will be:")}}
                        <b>ABC001XYZ</b>
                        <br>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div class="card-body">
          <form id="demo-form2" method="post" enctype="multipart/form-data" action="{{url('admin/invoice/')}}"
            data-parsley-validate class="form-horizontal form-label-left">
            {{csrf_field()}}

            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label class="control-label" for="first-name">
                    {{__('Order Prefix')}}:
                  </label>

                  <input type="text" name="order_prefix" value="{{$Invoice->order_prefix ?? ''}}"
                    class="form-control col-md-12">
                  <small class="text-info"> <i class="text-dark feather icon-help-circle"></i>({{__("Please Enter Order Prefix")}})</small>

                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group">
                  <label class="control-label" for="first-name">
                    {{__('Invoice Prefix')}}:
                  </label>


                  <input type="text" id="first-name" name="prefix" value="{{$Invoice->prefix ?? ''}}"
                    class="form-control col-md-12">
                  <small class="text-info"> <i class="text-dark feather icon-help-circle"></i>({{__("Please Enter Prefix")}})</small>

                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group">
                  <label class="control-label" for="first-name">
                    {{__('Invoice Postfix')}}:
                  </label>


                  <input type="text" id="first-name" name="postfix" value="{{$Invoice->postfix ?? ''}}"
                    class="form-control col-md-12">
                  <small class="text-info"> <i class="text-dark feather icon-help-circle"></i>({{__('Please Enter Postfix')}})</small>

                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group">
                  <label class="control-label" for="first-name">
                    {{__('Invoice No. Start From')}}:
                  </label>


                  <input type="text" id="first-name" name="inv_start" value="{{$Invoice->inv_start ?? ''}}"
                    class="form-control col-md-12">
                  <br>

                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group">
                  <label class="control-label" for="first-name">
                    {{__('COD Prefix:')}}
                  </label>


                  <input type="text" id="first-name" name="cod_prefix" value="{{$Invoice->cod_prefix ?? ''}}"
                    class="form-control col-md-12">
                  <small class="text-info"> <i class="text-dark feather icon-help-circle"></i>({{__("Please Enter COD Prefix")}})</small>


                </div>
              </div>


              <div class="col-md-4">
                <div class="form-group">
                  <label class="control-label" for="first-name">
                    {{__('COD Postfix')}}:
                  </label>


                  <input type="text" id="first-name" name="cod_postfix" value="{{$Invoice->cod_postfix ?? ''}}"
                    class="form-control col-md-12">
                  <small class="text-info"> <i class="text-dark feather icon-help-circle"></i>({{__("Please Enter COD Prefix")}})</small>


                </div>
              </div>

              <div class="col-md-12">
                <div class="form-group">
                  <label class="control-label" for="first-name">
                    {{__('Terms')}}:
                  </label>


                  <textarea name="terms" class="editor form-control" rows="5"
                    cols="30">{!!$Invoice->terms ?? ''!!}</textarea>
                  <small class="text-info"> <i class="text-dark feather icon-help-circle"></i>({{__('Enter terms which display on invoice bottom')}})</small>


                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label" for="seal-first-name">
                    {{__('Seal:')}}
                  </label>


                  <div class="input-group mb-3">


                    <div class="custom-file">

                      <input type="file" name="seal" class="inputfile inputfile-1" id="inputGroupFile012"
                        aria-describedby="inputGroupFileAddon01">
                      <label class="custom-file-label" for="inputGroupFile012">{{ __("Choose file") }} </label>
                    </div>
                  </div>
                  <small class="text-info"> <i class="text-dark feather icon-help-circle"></i>({{__("It will display on Invoice at bottom right")}})</small>

                </div>
              </div>

              <div class="col-lg-6">
                <div class="well">
                  @php
                  $seal = @file_get_contents(public_path().'/images/seal/'.$Invoice->seal);
                  @endphp
                  @if($seal)
                  <p><b>{{__("Preview")}}:</b></p>
                  <img class="bg-primary-rgba pro-img" src="{{ url('images/seal/'.$Invoice->seal) }}"
                    title="{{ __("Current Seal") }}" alt="{{ $Invoice->seal }}" />
                  @else
                  <p>{{ __('No Image Found !') }}</p>
                  @endif
                </div>
              </div>

              <div class="col-lg-6">
                <div class="form-group">
                  <label class="control-label col-md-12" for="sign-first-name">
                    {{__("Sign")}}:
                  </label>
                  <div class="input-group mb-3">
  
                   
                    <div class="custom-file">
  
                      <input type="file" name="sign" class="inputfile inputfile-1" id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01">
                      <label class="custom-file-label" for="inputGroupFile01">{{ __("Choose file") }} </label>
                    </div>
                  </div>
                  <small class="text-info"> <i class="text-dark feather icon-help-circle"></i>({{__("It will display on Invoice at bottom left")}})</small>
  
                </div>
              </div>
  
              <div class="col-md-6">
                <div class="well">
                  @php
                  $sign = @file_get_contents(public_path().'/images/sign/'.$Invoice->sign);
                  @endphp
                  @if($sign)
                  <p><b>{{__("Preview")}}:</b></p>
                  <img class="pro-img" src="{{ url('images/sign/'.$Invoice->sign) }}" title="{{ __('Current Seal') }}"
                    alt="{{ $Invoice->sign }}" />
                  @else
                  <p>{{ __('No Image Found !') }}</p>
                  @endif
                </div>
              </div>  

            </div>


        </div>

        <div class="ln_solid"></div>
        <div class="form-group col-md-12">
          <button @if(env('DEMO_LOCK')==0) type="reset" @else disabled title="{{ __('This operation is disabled is demo !') }}"
            @endif class="btn btn-danger-rgba"><i class="fa fa-ban"></i> {{ __("Reset") }}</button>
          <button @if(env('DEMO_LOCK')==0) type="submit" @else disabled title="{{ __('This operation is disabled is demo !') }}"
            @endif class="btn btn-primary-rgba"><i class="fa fa-check-circle"></i>
            {{ __("Update") }}</button>
        </div>
        <div class="clear-both"></div>

        </form>
      </div>
    </div>
  </div>
</div>
@endsection