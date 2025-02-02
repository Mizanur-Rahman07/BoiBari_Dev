@extends('admin.layouts.master-soyuz')
@section('title',__('All Stores |'))
@section('body')

<?php
  $data['heading'] = 'All Stores';
  $data['title0'] = 'Stores & Products';
  $data['title1'] = 'All Stores';
?>
@include('admin.layouts.topbar',$data)

<div class="contentbar bardashboard-card"> 
  <div class="row">
    <div class="col-lg-12">
      <div class="card m-b-30">
        <div class="card-header">
          
          <div class="row">
            <div class="col-lg-8">
              <h5 class="box-title">{{__("All Stores")}}</h5>
            </div>
            <div class="col-md-4">
              <div class="widgetbar">
                @can('stores.create')
                <a href="{{url('admin/stores/create')}}" class="float-right btn btn-primary-rgba mr-2"><i class="feather icon-plus mr-2"></i>{{ __('Add Store') }}</a>
                @endcan
              </div>
            </div>
          </div>

        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table id="store_table" class="table table-striped table-bordered">
              <thead>
                <th>{{ __('ID') }}</th>
                <th>{{ __('Store Logo') }}</th>
                <th>{{ __('Store Details') }}</th>
                <th>{{ __('Owner') }}</th>
                <th>{{ __('Status') }}</th>
                <th>{{ __('Store Request Accepted ?') }}</th>
                <th>{{ __('Request For Delete') }}</th>
                <th>{{ __('Action') }}</th>
              </thead>
              <tbody>
              </tbody>
            </table>                  
          </div>
   
        </div>
      </div>
    </div>
  </div>
</div>
@endsection
@section('custom-script')
<script>
  var url = {!! json_encode( route('stores.index') ) !!};
</script>
<script src="{{url('js/store.js')}}"></script>
@endsection
