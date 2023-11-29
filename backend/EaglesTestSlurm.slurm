#!/usr/bin/env bash

#SBATCH --nodes=1
#SBATCH --time=5:00
#SBATCH --partition=short-40core
#SBATCH --job-name=Eagles_test
#SBATCH --output=testing.txt
#SBATCH --mail-user=brandy.ma@stonybrook.edu
#SBATCH --mail-type=BEGIN,END


#load required modules
module load python

pip install gerrychain
pip install matplotlib-venn
apt-get -qq install -y libfluidsynth1

parallel --jobs 40 python seawulfTester.py {} ::: {1..100}









