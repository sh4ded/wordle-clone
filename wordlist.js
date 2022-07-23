import React, { useState } from 'react';
import {readFileSync, promises as fsPromises} from 'fs';

const getAll = () => {
	const contents = readFileSync('./wordlist.txt', 'utf-8');
	const arr = contents.split(/\r?\n/);
	console.log(arr);
	return arr;
}

export default getAll;