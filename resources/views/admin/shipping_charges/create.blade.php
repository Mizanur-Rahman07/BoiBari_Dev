@extends('admin.layouts.master-soyuz')
@section('title',__('Shipping Charge Settings |'))
@section('body')

<?php
  $data['heading'] = 'Add Shipping Charge';
  $data['title0'] = 'Shipping & Taxes';
  $data['title1'] = 'Shipping Charge';
  $data['title2'] = 'Add Shipping Charge';
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
                            <div class="col-lg-8">
                                <h5 class="box-title">{{ __('Create') }} {{ __('Shipping Charge') }}</h5>
                            </div>
                            <div class="col-md-4">
                                <div class="widgetbar">
                                    <a href="{{ url('admin/shiping_charg/index') }}" class="btn btn-primary-rgba"><i class="feather icon-arrow-left mr-2"></i>{{ __("Back")}}</a>
                                </div>
                            </div>
                        </div>     

                    </div>
                    <div class="card-body">
                        <form id="demo-form2" method="post" action="{{route('admin.shipping.charge.store')}}" data-parsley-validate class="form-horizontal form-label-left">
                            {{csrf_field()}}
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="control-label mb-1" for="first-name">
                                            {{__('City Name')}}:
                                        </label>
                                        <input type="text" name="city_name" value=""
                                               class="form-control col-md-12 ">
                                    </div>
                                </div>

                                {{--<div class="col-md-4">--}}
                                    {{--<div class="form-group">--}}
                                        {{--<label class="control-label mb-1" for="first-name">--}}
                                            {{--{{__('Shipping Charge Type')}}:--}}
                                        {{--</label>--}}

                                        {{--<select class="form-control form-select-lg shipping_charge_type" aria-label=".form-select-lg example" name="shipping_charge_type" >--}}
                                            {{--<option selected>Please select </option>--}}
                                            {{--<option value="global">Default</option>--}}
                                            {{--<option value="custom">Custom</option>--}}

                                        {{--</select>--}}
                                    {{--</div>--}}
                                {{--</div>--}}
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="control-label" for="first-name">
                                            {{__('Custom Price')}}:

                                        </label>

                                        <input type="text" name="custom_price"
                                               class="form-control col-md-12 ">

                                    </div>
                                </div>

                                <div class="form-group col-md-12">

                                    <button  type="submit"
                                             class="btn btn-primary-rgba"><i class="fa fa-check-circle"></i>
                                        {{ __("Update") }}</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {{--<script>--}}
        {{--$('.shipping_charge_type').on('change',function(){--}}
            {{--console.log();--}}
            {{--if($(this).val() =='global'){--}}
                {{--$('.set_global_price').show();--}}
                {{--if(`{{@$global->global_price}}`){--}}
                    {{--$('.shipping_price').val(`{{@$global->global_price}}`)--}}
                {{--}else{--}}
                    {{--$('.shipping_price').val(10)--}}
                {{--}--}}
                {{--$('.shipping_price').attr("disabled", 'disabled');--}}
            {{--}else{--}}
                {{--$('.set_global_price').hide();--}}
                {{--$('.shipping_price').val('');--}}
                {{--$('.shipping_price').prop("disabled", false);--}}
            {{--}--}}
        {{--})--}}
        {{--$('.set_global_price').on('click',function(){--}}
            {{--$('.shipping_price').prop("disabled", false)--}}
        {{--})--}}
    {{--</script>--}}




@endsection