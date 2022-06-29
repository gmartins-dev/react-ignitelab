import { Logo } from '../components/Logo';

export function Subscribe() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-no-repeat bg-cover bg-blur">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{' '}
            <strong className="text-blue-500">
              aplicação completa
            </strong>
            , do zero, com{' '}
            <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 leading-relaxed text-gray-200">
            Em apenas uma semana você vai dominar na prática
            uma das tecnologias mais utilizadas e com alta
            demanda para acessar as melhores oportunidades
            do mercado.
          </p>
        </div>
      </div>
    </div>
  );
}
