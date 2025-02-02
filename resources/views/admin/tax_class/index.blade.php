@extends('admin.layouts.master-soyuz')
@section('title',__('All Tax Classes | '))
@section('body')

<?php
  $data['heading'] = 'All Tax Classes';
  $data['title0'] = 'Shipping & Taxes';
  $data['title1'] = 'All Tax Classes';
?>
@include('admin.layouts.topbar',$data)

<div class="contentbar bardashboard-card"> 

  <div class="row">
  
      <div class="col-lg-12">
          <div class="card m-b-30">
              <div class="card-header">
                
                <div class="row">
                  <div class="col-lg-8">
                    <h5 class="card-title"> {{__("Tax Classes")}}</h5>
                  </div>
                  <div class="col-md-4">
                    <div class="widgetbar">
                      <a href=" {{url('admin/tax_class/create')}} " class="btn btn-primary-rgba"><i class="feather icon-plus mr-2"></i>  Add Tax Class</a>
                    </div>
                  </div>
                </div>

              </div>
              
              <div class="card-body">
               
                  <div class="table-responsive">
                    <table  id="datatable-buttons" class="table table-striped table-bordered">
                      <thead>
                        <tr >
                          <th>{{ __("ID") }}</th>
                          <th>{{ __("Tax Title") }}</th>
                          <th>{{ __('Description') }}</th>
                          <th>{{ __('Action') }}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <?php $i=1;?>
                        @foreach($taxs as $tax)
                        
                        <tr>
                        <td class="text-dark">{{$i++}}</td>
                        <td>{{$tax->title}}</td>
                        <td>{{$tax->des}}</td>
                        <td>
                          <div class="dropdown">
                            <button class="btn btn-round btn-primary-rgba" type="button" id="CustomdropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="feather icon-more-vertical-"></i></button>
                            <div class="dropdown-menu" aria-labelledby="CustomdropdownMenuButton3">
                              
                             
                                <a class="dropdown-item"   href=" {{url('admin/tax_class/'.$tax->id.'/edit')}} " ><i class="feather icon-edit mr-2"></i>{{ __("Edit")}}</a>
                             
                          
                              
                                <a class="dropdown-item"  data-toggle="modal" data-target="#tax_{{$tax->id}}"><i class="feather icon-delete mr-2"></i>{{ __("Delete")}}</a>
                                
                              </div>
                          </div>
                          
                        </td>
                       
                           
      
                        </tr>
                        @endforeach
                        
                        </tbody>
                      </table>
                </div>
            </div>
        </div>
    </div>
    <!-- End col -->
</div>

        
@foreach($taxs as $tax)
        <div id="tax_{{ $tax->id }}" class="delete-modal modal fade" role="dialog">
        <div class="modal-dialog modal-sm">
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <div class="delete-icon"></div>
            </div>
            <div class="modal-body text-center">
              <h4 class="modal-heading">{{ __("Are You Sure ?") }}</h4>
              <p>{{ __("Do you really want to delete this tax? This process cannot be undone.") }}</p>
            </div>
            <div class="modal-footer">
              <form method="post" action="{{url('admin/tax_class/'.$tax->id)}}" class="pull-right">
                              {{csrf_field()}}
                               {{method_field("DELETE")}}
                              
            
                <button type="reset" class="btn btn-gray translate-y-3" data-dismiss="modal">{{ __("NO") }}</button>
                <button type="submit" class="btn btn-danger">{{ __("YES") }}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
@endforeach
@endsection     
                        
  
                    
    
                  
          
                  
    
    
          
                  
    
    
                  
                  
                
    
                
                                      


          

            
          
              




            

            
            
            
  
                 
  
               
  
          
    
             
            

          


