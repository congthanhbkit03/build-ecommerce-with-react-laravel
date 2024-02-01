<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Subcategory;
use Image;
class CategoryController extends Controller
{
    public function allCats(){
    	$cats = Category::all();
    	$all = [];
    	foreach ($cats as $cat) {
    		# code...
    		$sub = Subcategory::where("category_name", $cat['category_name'])->get();
    		$cat['subcategory'] = $sub;
    		array_push($all, $cat);
    	}
    	return $all;
    }

     public function GetAllCategory(){

        $category = Category::latest()->get();
        return view('backend.category.category_view',compact('category'));

    }
    
    public function AddCategory(){
      return view('backend.category.category_add');
    } // End Mehtod 


    public function StoreCategory(Request $request){
        $request->validate([
            'category_name' => 'required',
        ],[
            'category_name.required' => 'Input Category Name'

        ]);

        $image = $request->file('category_image');
        $name_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
        Image::make($image)->resize(128,128)->save('upload/category/'.$name_gen);
        $save_url = 'http://127.0.0.1:8000/upload/category/'.$name_gen;

        Category::insert([
            'category_name' => $request->category_name,
            'category_image' => $save_url,
        ]);

        $notification = array(
            'message' => 'Category Inserted Successfully',
            'alert-type' => 'success'
        );

        return redirect()->route('all.category')->with($notification);
    }

    public function EditCategory($id){

        $category = Category::findOrFail($id);
        return view('backend.category.category_edit',compact('category'));

    } //End Method 


    public function UpdateCategory(Request $request){

        $category_id = $request->id;

        //neu co chon anh 
        if ($request->file('category_image')) {

            $image = $request->file('category_image');
            $name_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
            Image::make($image)->resize(128,128)->save('upload/category/'.$name_gen);
            $save_url = 'http://127.0.0.1:8000/upload/category/'.$name_gen;

            Category::findOrFail($category_id)->update([
                'category_name' => $request->category_name,
                'category_image' => $save_url,
            ]);

            $notification = array(
                'message' => 'Category Update With Image Successfully',
                'alert-type' => 'success'
            );

            return redirect()->route('all.category')->with($notification);

        }
        else{

             Category::findOrFail($category_id)->update([
                'category_name' => $request->category_name,

            ]);

            $notification = array(
                'message' => 'Category Updateed Without Image Successfully',
                'alert-type' => 'success'
            );

            return redirect()->route('all.category')->with($notification);

        }
    }

    public function DeleteCategory($id){

        Category::findOrFail($id)->delete();

        $notification = array(
                'message' => 'Category Deleted Successfully',
                'alert-type' => 'success'
            );

        return redirect()->back()->with($notification);



    }
}
