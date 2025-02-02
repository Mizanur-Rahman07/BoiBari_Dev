@extends('admin.layouts.master-soyuz')
@section('title',__('Add Hotdeal | '))
@section('body')

<?php
  $data['heading'] = 'Add Hotdeal';
  $data['title0'] = 'Marketing';
  $data['title1'] = 'All Hotdeals';
  $data['title2'] = 'Add Hotdeal';
?>
@include('admin.layouts.topbar',$data)

<div class="contentbar bardashboard-card">

  <div class="row">
    
    <div class="col-lg-12">

      @if ($errors->any())
        <div class="alert alert-danger" role="alert">
          @foreach($errors->all() as $error)
          <p>{{ $error}}<button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span></button></p>
          @endforeach
        </div>
      @endif

      <div class="card m-b-30">

        <div class="card-header">
          
            <div class="row">
              <div class="col-lg-8">
                <h5 class="box-title">{{ __('Add Hotdeal') }}</h5>
              </div>
              <div class="col-md-4">
                <div class="widgetbar">
                  <a href="{{url('admin/hotdeal/')}}" class="btn btn-primary-rgba mr-2"><i class="feather icon-arrow-left mr-2"></i>{{ __("Back") }}</a>
                </div>
              </div>
            </div>
            
        </div>

        <div class="card-body">
          <!-- Form Start -->
          <form id="demo-form2" method="post" enctype="multipart/form-data" action="{{url('admin/hotdeal')}}" data-parsley-validate class="form-horizontal form-label-left">
            {{csrf_field()}}

            <div class="row">

              <div class="form-group col-md-6">
                <label class="control-label" for="first-name"> {{__("Created Date")}}</label>
                <div class="input-group">
                  <input type="text" class="form-control timepickerwithdate" name="start" value="{{date('d/m/Y')}}" placeholder="dd/mm/yyyy - hh:ii aa" aria-describedby="basic-addon5" />
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon5"><i class="feather icon-calendar"></i></span>
                  </div>
                </div>
              </div>

              <div class="form-group col-md-6">
                <label class="control-label" for="first-name"> {{__("Expire Date")}}</label>
                <div class="input-group">
                  <input type="text" class="form-control timepickerwithdate" name="end" value="{{date('d/m/Y')}}" placeholder="dd/mm/yyyy - hh:ii aa" aria-describedby="basic-addon5" />
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon5"><i class="feather icon-calendar"></i></span>
                  </div>
                </div>
              </div>

              <div class="form-group col-md-6">
                  <label for="">{{ __("Belongs To:") }}</label>
                  <select required name="link_by" id="link_by" class="select2 form-control">
                    <option value="sp">{{ __("Belongs to simple product") }}</option>
                    <option value="vp">{{ __("Belongs to variant product") }}</option>
                  </select>
              </div>

              <div class="simpleproduct form-group col-md-6">
                <label class="control-label" for="first-name"> {{  __('Select Simple Product') }} <span class="required">*</span> </label>
                <select name="simple_pro_id" class="form-control select2 col-md-12">
                  <option value="">{{ __("Please Select Product") }}</option>
                  @foreach($simple_products as $key => $sp)
                    <option value="{{$key}}">{{$sp}}</option>
                  @endforeach
                </select>
              </div>

              <div class="d-none variantproduct form-group col-md-6">
                <label class="control-label" for="first-name"> {{  __('Select Variant Product') }} <span class="required">*</span></label>
                <select name="pro_id" class="form-control select2 col-md-12">
                  <option value="">{{ __("Please Select Product") }}</option>
                  @foreach($products as $key => $pro)
                  <option value="{{$key}}">{{$pro}}</option>
                  @endforeach
                </select>
              </div>

              <div class="form-group col-md-6">
                <label class="control-label" for="first-name"> Status <span class="required">*</span></label><br>
                <label class="switch">
                  <input class="slider tgl tgl-skewed" type="checkbox" id="status3" checked="checked">
                  <span class="knob"></span>
                </label>
                <br>
                <input type="hidden" name="status" value="1" id="status3">
              </div>

              <div class="form-group col-md-12">
                <button type="reset" class="btn btn-danger"><i class="fa fa-ban"></i> {{ __("Reset") }}</button>
                <button type="submit" class="btn btn-primary"><i class="fa fa-check-circle"></i> {{ __("Create") }}</button>
              </div>

              <div class="clear-both"></div>

          </form>
          <!-- Form End -->
        </div>
      </div>
    </div>
  </div>
</div>
@endsection
@push('script')
  <script>
    $('#link_by').on('change',function(){

      if($(this).val() == 'sp'){

        $('.variantproduct').addClass('d-none').removeClass('d-block');
        $('.simpleproduct').addClass('d-block').removeClass('d-none');

      }

      if($(this).val() == 'vp'){

        $('.variantproduct').addClass('d-block').removeClass('d-none');
        $('.simpleproduct').addClass('d-none').removeClass('d-block');

      }

    });
  </script>
@endpush