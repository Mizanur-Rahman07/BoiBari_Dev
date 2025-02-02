@extends('admin.layouts.sellermastersoyuz')
@section('title',__('Simple Products'))
@section('body')

<?php
  $data['heading'] = 'Simple Products';
  $data['title0'] = 'Products Management';
  $data['title1'] = 'Simple Products';
?>
@include('admin.layouts.topbar',$data)

<div class="contentbar bardashboard-card">    
             
  <!-- Start row -->
  <div class="row">
  
      <div class="col-lg-12">
          <div class="card m-b-30">
              <div class="card-header">
                  
                <div class="row">
                    <div class="col-lg-4">
                        <h5 class="card-title">{{ __('Simple Products')}}</h5>
                    </div>
                    <div class="col-md-8">
                        <div class="widgetbar">
                            @if(Module::has('SellerSubscription') && Module::find('SellerSubscription')->isEnabled())
                                @if(getPlanStatus() == 1 && ((auth()->user()->products()->count() + auth()->user()->store->simple_products->count()) + auth()->user()->store->simple_products->count()) < auth()->user()->activeSubscription->plan->product_create)
                                    <a href="{{ route("simple-products.create") }}" class="btn btn-primary-rgba"><i class="feather icon-plus mr-2"></i> {{ __('Add Product') }}</a>
                                    @if(auth()->user()->activeSubscription->plan->csv_product == 1)
                                        <a title="Import products" href="{{ route('seller.import.product') }}" class="btn btn-success-rgba mr-2"><i class="feather icon-download mr-1"></i> {{ __('Import Products') }}</a>
                                    @endif
                                @endif
                            @else
                                <a href="{{ route("simple-products.create") }}" class="btn btn-primary-rgba"><i class="feather icon-plus mr-2"></i> {{__('Add Product') }}</a>
                                <a title="{{ __('Import products') }}" href="{{ route('seller.import.product') }}" class="btn btn-success-rgba mr-2"><i class="feather icon-download mr-1"></i> {{ __('Import Products') }}</a>
                            @endif
                        <a href="{{ route("trash.simple.products") }}" class="btn btn-danger-rgba mr-2">
                            <i class="feather icon-trash-2 mr-1"></i> {{__("Trash") }}
                        </a>
                        </div>
                    </div>
                </div>
                    
              </div>
              
              <div class="card-body">
                
                  <div class="table-responsive">
                      <table id="d_products" class="table table-striped table-bordered">
                        <thead>
                            <th>#</th>
                            <th>{{ __('Product Image') }}</th>
                            <th>{{ __('Product ID') }}</th>
                            <th>{{ __('Product Name') }}</th>
                            <th>{{ __('Product Pricing') }}</th>
                            <th>{{ __('Product Status') }}</th>
                            <th>{{ __('Action') }}</th>
                        </thead>
                         
                       
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!-- End col -->
</div>

@endsection     
                        
@section('custom-script')
<script>
    $(function () {
        "use strict";
        var table = $('#d_products').DataTable({
            processing: true,
            serverSide: true,
            ajax: '{{ route("simple-products.index") }}',
            language: {
                searchPlaceholder: "Search Products..."
            },
            columns: [
                {
                    data: 'DT_RowIndex',
                    name: 'DT_RowIndex',
                    searchable: false,
                    orderable : false
                },
                {
                    data: 'image',
                    name: 'image',
                    searchable: false,
                    orderable : false
                },
                {
                    data: 'id',
                    name: 'simple_products.id'
                },
                {
                    data: 'product_name',
                    name: 'simple_products.product_name'
                },
                {
                    data: 'price',
                    name: 'simple_products.actual_selling_price'
                },
                {
                    data: 'status',
                    name: 'simple_products.status'
                },
                {
                    data: 'action',
                    name: 'action',
                    searchable: false,
                    orderable : false
                },
            ],
            dom: 'lBfrtip',
            buttons: [
                'csv', 'excel', 'pdf', 'print'
            ],
            order: [
                [0, 'DESC']
            ]
        });

    });
</script>
@endsection 