import React from "react";

export const Form = () => {
    return <form className="bg-white p-10">
        <div className="mb-4">
            <label className="label-form" htmlFor='name'>
                Name
                </label>
            <input id='name' type='text' name='name' className="input-form"/> 
        </div>
        <div className="mb-4">
            <label className="label-form" htmlFor='name'>
                Company
                </label>
            <input id='company' type='text' name='company' className="input-form"/> 
        </div>
        <div className="mb-4">
            <label className="label-form" htmlFor='name'>
                Email
                </label>
            <input id='email' type='text' name='email' className="input-form"/> 
        </div>
        <div className="mb-4">
            <label className="label-form" htmlFor='name'>
                Message
                </label>
            <textarea id='message' name='message' className="input-form"/> 
        </div>
        <button type='submit' className="bg-blue rounded-md text-white hover:text-blue hover:bg-white min-w-100 px-5 h-12 border border-slate-300 hover:border-indigo-300hover:border-1">
            Send Message
            </button>
    </form>
};