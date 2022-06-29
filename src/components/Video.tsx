import { DiscordLogo, Lightning } from 'phosphor-react';

export function Video() {
  return (
    <div className="flex-1">
      <div className="flex justify-center bg-black">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              Aula 01 - Abertura do Ignite Lab
            </h1>
            <p className="mt-12 leading-relaxed text-gray-200">
              Nessa aula vamos dar inicio.......
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="w-16 h-16 border-2 border-blue-500 rounded-full"
                src="https://github.com/guilhermemm-dev.png"
                alt="github avatar"
              />

              <div className="leading-relaxed">
                <strong className="block text-2xl font-bold">
                  Guilherme Martins
                </strong>
                <strong className="block text-sm text-gray-200">
                  Front-end Developer
                </strong>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="flex items-center justify-center gap-2 p-4 text-sm font-bold uppercase transition-colors bg-green-500 rounded hover:bg-green-700"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 p-4 text-sm font-bold text-blue-500 uppercase transition-colors border border-blue-500 rounded hover:bg-blue-500 hover:text-gray-900 "
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
