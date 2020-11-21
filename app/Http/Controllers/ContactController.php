<?php

namespace App\Http\Controllers;

use App\Category;
use App\Contact;
use http\Env\Response;
use Illuminate\Http\Request;
use mysql_xdevapi\Exception;
use Throwable;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        //
        $contact=Contact::all();

       return response()->json($contact);
    }
    public function create(Request $request){

        $category=new Category();
        $category->name=$request->name;
        $category->save();


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return bool|\Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        //
        try {
            $contact=new Contact();
            $contact->fullname=$request->name;
            $contact->email=$request->email;
            $contact->phone=$request->phone;
            $contact->save();
            return response()->json($contact);
        }catch (Throwable $e) {
            report($e);

            return false;
        }




    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
//    public function store(Request $request)
//    {
//        //
//    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        Contact::find(id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request,$id)
    {
        //
        $customer_info = $request->validate([
            'name' => 'required',
            'email' => 'required|unique:posts|max:255',
            'phone'=>'required',
        ]);

      $contact=Contact::find(id);
       $contact=new Contact();
       $contact->fullname=$request->input('name');
        $contact->fullname=$request->input('email');
        $contact->fullname=$request->input('phone');
        $contact->update()->where('id',$id);


    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        Contact::find($id)->delete();
//        return response()->json($contact);
    }
}
