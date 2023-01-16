<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CinemaHallRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'hall_title' => ['required', 'string'],
            'row' => ['required', 'integer'],
            'chair' => ['required', 'integer'],
            'price_standard' => ['required', 'integer'],
            'price_vip' => ['required', 'integer'],
        ];
    }
}
