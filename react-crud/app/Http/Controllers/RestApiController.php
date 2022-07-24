<?php
    
    namespace App\Http\Controllers;

    use Illuminate\Http\Request;
    use Illuminate\Http\Response;
    use App\Models\District;
    use App\Models\Village;

    class RestApiController extends Controller {

        public function welcome(){
            $products = District::get();

            return response()->json($products, 200);
        }

        public function getapi() {
            $products = District::latest();

            return response()->json($products, 200);
        }

        public function getvillages() {
            $villages = Village::get();

            return response()->json($villages, 200);
        }
    }
?>