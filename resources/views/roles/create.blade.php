@extends('admin.layouts.master-soyuz')
@section('title',__('Create a new role'))
@section('body')

<?php
  $data['heading'] = 'Create a new role';
  $data['title0'] = 'Role';
  $data['title1'] = 'Create a new role';
?>
@include('admin.layouts.topbar',$data)

<div class="contentbar bardashboard-card">     
    <div class="row">
        <div class="col-lg-12">
          <div class="card m-b-30">
              <div class="card-header">
                    
                    <div class="row">
                        <div class="col-lg-10">
                            <h5 class="card-title"> {{__("Create a new role")}}</h5>
                        </div>
                        <div class="col-md-2">
                            <div class="widgetbar">
                            <a href="{{ url('admin/roles') }}" class="btn btn-primary-rgba"><i class="feather icon-arrow-left mr-2"></i>{{ __("Back")}}</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="card-body">
                    <form action="{{ route('roles.store') }}" method="POST" class="needs-validation" novalidate>
                        @csrf
                        <div class="form-group">
                              <label for="name"  class="text-dark">{{__('Role name')}} <span class="required">*</span></label>
                            <input name="name" type="text" class="form-control @error('name') is-invalid @enderror" id="name" placeholder="{{ __('Enter role name') }}" value="{{ old('name') }}" required autofocus>
                    
                            <input type="hidden" name="guard" value="web">
                    
                            @error('name')
                                <span class="text-red" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    
                        <div class="form-group">
                            
                    
                            <p class="text-dark"> <b>{{ __('Assign Permissions to role') }}</b> </p>
                           
                            <table class="permissionTable table">
                                <th>
                                    {{__('Section')}}
                                </th>
                    
                                <th>
                                    <label>
                                        <input class="grand_selectall" type="checkbox">
                                        {{__('Select All') }}
                                    </label>
                                </th>
                    
                                <th>
                                    {{__("Available permissions")}}
                                </th>
                    
                    
                               
                                <tbody>
                                   @foreach($custom_permission as $key => $group)
                                    <tr>
                                        <td>
                                            <b>{{ ucfirst($key) }}</b>
                                        </td>
                                        <td width="30%">
                                            <label>
                                                <input class="selectall" type="checkbox">
                                                {{__('Select All') }}
                                            </label>
                                        </td>
                                        <td>
                                            
                                            @forelse($group as $permission)
                    
                                               <label>
                                                   <input name="permissions[]" class="permissioncheckbox" type="checkbox" value="{{ $permission->id }}">
                                                   {{$permission->name}} &nbsp;&nbsp;
                                               </label>
                    
                                            @empty
                                                {{ __("No permission in this group !") }}
                                            @endforelse
                    
                                        </td>
                    
                                    </tr>
                                   @endforeach
                                </tbody>
                            </table>
                    
                        </div>
                    
                        <div class="form-group">
                            <button type="reset" class="btn btn-danger mr-1"><i class="fa fa-ban"></i> {{ __("Reset")}}</button>
                            <button type="submit" class="btn btn-primary"><i class="fa fa-check-circle"></i>
                            {{ __("Create")}}</button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
@endsection
@section('custom-script')
      <script src="{{ url('/js/checkbox.js') }}"></script>
@endsection