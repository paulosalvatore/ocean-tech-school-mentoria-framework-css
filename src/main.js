import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="w-full h-full bg-slate-950 p-16 flex justify-center gap-8">
    <div class="p-2 text-white">
      <div class="text-sm">
        ⬇️
        DOWNLOAD
        <span class="text-slate-400">Mbps</span>
      </div>
      <div class="text-center text-4xl">
        236.12
      </div>
    </div>

    <div class="p-2 text-white">
      <div class="text-sm">
        ⬆️
        UPLOAD
        <span class="text-slate-400">Mbps</span>
      </div>
      <div class="text-center text-4xl">
        157.49
      </div>
    </div>
  </div>
`
