<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function ProductListByRemark(Request $request){
    	$remark = $request->remark; //Featured, New... tachs biet ra
    	$products = Product::where('remark', $remark)->get();
    	return $products;
    }
    public function ProductListByCategory(Request $request){
    	$cat = $request->remark; //Featured, New... tachs biet ra
    	$products = Product::where('category', $cat)->get();
    	return $products;
    }
    public function ProductListBySubcategory(Request $request){
    	$subcat = $request->remark; //Featured, New... tachs biet ra
    	$products = Product::where('subcategory', $subcat)->get();
    	return $products;
    }

    public function ProductListBySearch(Request $request){
        $key = $request->key;
        $products = Product::where('title', 'LIKE', "%{$key}%")->orWhere('brand', 'LIKE',"%{$key}%") ->get();
        return $products;
    }
}
