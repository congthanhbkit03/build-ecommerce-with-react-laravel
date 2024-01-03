<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Subcategory;
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
}
