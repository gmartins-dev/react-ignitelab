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
            <p className="mt-12 text-gray-200">
              Nessa aula vamos dar inicio.......
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="flex items-center justify-center gap-2 p-4 text-sm font-bold uppercase bg-green-500 rounded"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 p-4 text-sm font-bold text-blue-500 uppercase border border-blue-500 rounded"
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
