<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function addProduct(Request $req){
        $req->validate([
            'name' => 'nullable|string|max:255',
            'price' => 'nullable|numeric|min:0',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048', 
        ]);
        $product = new Product;
        $product->name = $req->name;
        $product->price = $req->price;
        $product->image = $req->file('image')->store('images');
        $product->description = $req->input('description');
        $product->save();
        return $product;

    }
    public function viewProduct(){
        $products = Product::all();
        return $products;
    }
    public function deleteProduct($id){
        $product = Product::find($id);
        $product->delete();
        return $product;
        }
    public function editProduct($id){
        return Product::find($id);
    }
    public function updateProduct(Request $request, $id)
    {
        $product = Product::findOrFail($id);
    
        $request->validate([
            'name' => 'nullable|string|max:255',
            'price' => 'nullable|numeric|min:0',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048', 
        ]);
    
        $product->name = $request->input('name');
        $product->price = $request->input('price');
    
        if ($request->hasFile('image')) {
            $product->image = $request->file('image')->store('images');
        }
    
        $product->save();
    
        return response()->json([
            'message' => 'Product updated successfully',
            'product' => $product,
        ], 200);
    }
    

}
