import { FormEvent } from 'react';
import { type Hex, parseEther } from 'viem';
import { type BaseError, useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';

export function SendTransaction() {
  const { data: hash, error, isPending, sendTransaction } = useSendTransaction()

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const to = formData.get('address') as Hex
    const value = formData.get('value') as string
    sendTransaction({ to, value: parseEther(value) })
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    })

  return (
    <div className="flex flex-wrap ">
      <div className="stack">
        <form className="flex flex-col gap-2 p-2 text-black" onSubmit={submit}>
          <input name="address" placeholder="Address" required />
          <input
            name="value"
            placeholder="Amount (ETH)"
            type="number"
            step="0.000000001"
            required
          />
          <button disabled={isPending} className='bg-primary-gold-500 p-4 rounded text-white' type="submit">
            {isPending ? 'Confirming...' : 'Send'}
          </button>
        </form>
        {hash && <div>Transaction Hash: {hash}</div>}
        {isConfirming && <div>Waiting for confirmation...</div>}
        {isConfirmed && <div>Transaction confirmed.</div>}
        {error && (
          <div>Error: {(error as BaseError).shortMessage || error.message}</div>
        )}
      </div>
    </div>
  )
}
