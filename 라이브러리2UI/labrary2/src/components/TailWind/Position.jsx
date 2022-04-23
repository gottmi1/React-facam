import React from 'react'

export default function Position() {
return (
<div className='grid grid-cols-5 grid-rows-2'>

  <div class="relative h-32 w-32">
    <div class="absolute left-0 top-0 h-16 w-16 bg-slate-100">01</div>
  </div>

  <div class="relative h-32 w-32">
    <div class="absolute inset-x-0 top-0 h-16 bg-slate-100">02</div>
  </div>

  <div class="relative h-32 w-32">
    <div class="absolute top-0 right-0 h-16 w-16 bg-slate-100">03</div>
  </div>

  <div class="relative h-32 w-32">
    <div class="absolute inset-y-0 left-0 w-16 bg-slate-100">04</div>
  </div>

  <div class="relative h-32 w-32">
    <div class="absolute inset-0 bg-slate-100">05</div>
  </div>

  <div class="relative h-32 w-32">
    <div class="absolute inset-y-0 right-0 w-16 bg-slate-100">06</div>
  </div>

  <div class="relative h-32 w-32">
    <div class="absolute bottom-0 left-0 h-16 w-16 bg-slate-100">07</div>
  </div>

  <div class="relative h-32 w-32">
    <div class="absolute inset-x-0 bottom-0 h-16 bg-slate-100">08</div>
  </div>

  <div class="relative h-32 w-32">
    <div class="absolute bottom-0 right-0 h-16 w-16 bg-slate-100">09</div>
  </div>

</div>
)
}