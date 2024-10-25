<?php

namespace App\Http\Livewire\Records;

use App\Http\Livewire\Traits\WithToasts;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Collection;
use Livewire\Component;

class Row extends Component
{
	use WithToasts;

	public Collection $rowData;

	public function showRecord()
	{
		$this->redirectRoute('records.edit', ['id' => $this->rowData['id']]);
	}

	public function toggleSelect()
	{
		$this->dispatch('toggleSelect', $this->rowData['id']);
	}

	public function destroyRecord()
	{
		$this->dispatch('confirmRecordDeletion', $this->rowData['id']);
	}

	public function restoreRecord()
	{
		$this->dispatch('restoreRecords', $this->rowData['id']);
	}

	/**
	 * @return Factory|View|Application
	 */
	public function render(): Factory|View|Application
	{
		return view('components.records.row');
	}
}
