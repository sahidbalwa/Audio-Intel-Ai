# Audio Intel CNN


## Overview

AudioIntel 🎧🧠

AudioIntel is an end-to-end AI-powered audio classification and visualization platform that I built using PyTorch, FastAPI, Next.js, React, and Tailwind CSS. The system is capable of identifying and classifying environmental sounds such as dog barks, bird chirps, sirens, and other audio events from uploaded audio files.

To achieve high accuracy and robust performance, I implemented a custom Convolutional Neural Network (CNN) with ResNet-style residual blocks, transforming raw audio signals into Mel Spectrograms for image-based feature extraction. The training pipeline incorporates advanced deep learning techniques including Mixup Data Augmentation, Time & Frequency Masking, Batch Normalization, AdamW Optimization, and OneCycle Learning Rate Scheduling.

The trained model is deployed using Modal's serverless GPU infrastructure, enabling fast and scalable inference. I also developed a FastAPI backend to serve predictions through REST APIs.

On the frontend, I built an interactive dashboard using Next.js, React and Tailwind CSS, allowing users to:

Upload audio files for real-time classification
View prediction confidence scores
Visualize audio waveforms and Mel Spectrograms
Explore internal CNN feature maps and activation layers
Understand how the model interprets audio signals

## Features:

- 🧠 Deep Audio CNN for sound classification
- 🧱 ResNet-style architecture with residual blocks
- 🎼 Mel Spectrogram audio-to-image conversion
- 🎛️ Data augmentation with Mixup & Time/Frequency Masking
- ⚡ Serverless GPU inference with Modal
- 📊 Interactive Next.js & React dashboard
- 👁️ Visualization of internal CNN feature maps
- 📈 Real-time audio classification with confidence scores
- 🌊 Waveform and Spectrogram visualization
- 🚀 FastAPI inference endpoint
- ⚙️ Optimized training with AdamW & OneCycleLR scheduler
- 📈 TensorBoard integration for training analysis
- 🛡️ Batch Normalization for stable & fast training
- 🎨 Modern UI with Tailwind CSS & Shadcn UI
- ✅ Pydantic data validation for robust API requests

## Setup

Follow these steps to install and set up the project.

### Clone the Repository

```bash

```

### Install Python

Download and install Python if not already installed. Use the link below for guidance on installation:
[Python Download](https://www.python.org/downloads/)

Create a virtual environment with **Python 3.12**.

### Backend

Navigate to folder:

```bash
cd audio-cnn
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Modal setup:

```bash
modal setup
```

Run on Modal:

```bash
modal run main.py
```

Deploy backend:

```bash
modal deploy main.py
```

### Frontend

Install dependencies:

```bash
cd audio-cnn-visualisation
npm i
```

Run:

```bash
npm run dev
```
